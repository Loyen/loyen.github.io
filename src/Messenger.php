<?php

namespace App;

class Messenger
{
    public function write(string|\Stringable $message): void {
        echo str_replace(
            [
                '</>',
                '<error>',
                '<info>',
                '<success>',
            ],
            [
                MessageType::DEFAULT->getColorCode(),
                MessageType::ERROR->getColorCode(),
                MessageType::INFO->getColorCode(),
                MessageType::SUCCESS->getColorCode(),
            ],
            $message
        ) . PHP_EOL;
    }
}
