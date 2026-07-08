<?php

namespace App;

use DateTimeImmutable;

class Article {
    /** @param string[] $tags */
    public function __construct(
        public string $title,
        public DateTimeImmutable $created,
        public string $content,
        public string $url,
        public array $tags,
    ) {}
}
