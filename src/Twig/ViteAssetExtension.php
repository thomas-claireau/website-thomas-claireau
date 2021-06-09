<?php

namespace App\Twig;

use Psr\Cache\CacheItemPoolInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ViteAssetExtension extends AbstractExtension
{
	private bool $isDev;
	private string $manifest;
	private ?array $manifestData = null;
	private $cache;

	const CACHE_KEY = "vite_manifest";

	public function __construct($isDev, $manifest, CacheItemPoolInterface $cache)
	{
		$this->isDev = $isDev;
		$this->manifest = $manifest;
		$this->cache = $cache;
	}

	public function getFunctions(): array
	{
		return [
			new TwigFunction('vite_asset', [$this, 'asset'], ['is_safe' => ["html"]])
		];
	}

	public function asset($entry)
	{
		if ($this->isDev) {
			return $this->assetDev($entry);
		}

		return $this->assetProd($entry);
	}

	public function assetDev(string $entry): string
	{
		$html = "<script type=\"module\" src=\"http://localhost:3000/assets/@vite/client\"></script>";
		$html .= "<script type=\"module\" src=\"http://localhost:3000/assets/js/$entry\"></script>";

		return $html;
	}

	public function assetProd(string $entry): string
	{
		if ($this->manifestData === null) {
			$item = $this->cache->getItem(self::CACHE_KEY);

			if ($item->isHit()) {
				$this->manifestData = $item->get();
			} else {
				$this->manifestData = json_decode(file_get_contents($this->manifest), true);
				$item->set($this->manifestData);
				$this->cache->save($item);
			}
		}

		$file = $this->manifestData["js/" . $entry]['file'];
		$css = isset($this->manifestData["js/" . $entry]['css']) ? $this->manifestData["js/" . $entry]['css'] : [];

		$html = "<script type=\"module\" src=\"/assets/$file\"></script>";

		foreach ($css as $cssFile) {
			$html .= "<link rel=\"stylesheet\" href=\"/assets/$cssFile\"";
		}

		return $html;
	}
}