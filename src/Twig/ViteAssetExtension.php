<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ViteAssetExtension extends AbstractExtension
{
	private bool $isDev;
	private string $manifest;

	public function __construct($isDev, $manifest)
	{
		$this->isDev = $isDev;
		$this->manifest = $manifest;
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
		$data = json_decode(file_get_contents($this->manifest), true);
		$file = $data["js/" . $entry]['file'];
		$css = $data["js/" . $entry]['css'];

		$html = "<script type=\"module\" src=\"/assets/$file\"></script>";

		foreach ($css as $cssFile) {
			$html .= "<link rel=\"stylesheet\" href=\"/assets/$cssFile\"";
		}

		return $html;
	}
}
