<?php

namespace App;

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Path;
use Twig\Environment;

class PageGenerator {
    public function __construct(
        private Filesystem $filesystem,
        private Environment $twig,
        private Messenger $messenger,
    ) {}

    /** @param array<string, mixed> $parameters */
    public function create(
        string $path,
        string $template,
        array $parameters
    ): void {
        $normalisedPath = Path::normalize($path);
        $pathDir = dirname($path);

        if (!is_dir($pathDir)) {
            $this->filesystem->mkdir($pathDir);
        }

        $this->filesystem->dumpFile(
            $path,
            $this->twig->render($template, $parameters)
        );

        $this->messenger->write("Page dumped as <success>{$normalisedPath}</>");
    }
}
