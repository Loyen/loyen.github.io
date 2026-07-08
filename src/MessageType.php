<?php

namespace App;

enum MessageType {
    case DEFAULT;
    case ERROR;
    case INFO;
    case SUCCESS;

    public function getColorCode(): string {
        return match($this) {
            self::ERROR => "\033[31m",
            self::INFO => "\033[34m",
            self::SUCCESS => "\033[32m",
            default => "\033[00m"
        };
    }
}
