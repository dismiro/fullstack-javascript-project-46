#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();
program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .helpOption('-h, --help', 'output usage information')
    // .option('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .parse();

