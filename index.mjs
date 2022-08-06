import chalk from "chalk";
const flame = chalk.hex("#E25822");
const bgFlame = chalk.bgHex("#E25822");
const flame_cube = bgFlame("   ");
const forest = chalk.hex("#14B37D");
const bgForest = chalk.bgHex("#14B37D");
const forest_cube = bgForest("   ");
const sunny = chalk.hex("#F2F27A");
const bgSunny = chalk.bgHex("#F2F27A");
const sunny_cube = bgSunny("   ");
const cerulean = chalk.hex("#3A75C4");
const bgCerulean = chalk.bgHex("#3A75C4");
const cerulean_cube = bgCerulean("   ");
const mahogany = chalk.hex("#703FAF");
const bgMahogany = chalk.bgHex("#703FAF");
const mahogany_cube = bgMahogany("   ");
const sky = chalk.hex("#87D3F8");
const bgSky = chalk.bgHex("#87D3F8");
const sky_cube = bgSky("   ");
const all_cube =
flame_cube +
" " +
forest_cube +
" " +
sunny_cube +
" " +
cerulean_cube +
" " +
mahogany_cube +
" " +
sky_cube;
console.log(
"\n\n" +
    all_cube +
    " 🌊 > " +
    flame(
    "■ " + chalk.underline("FLAME") + " > " + chalk.underline("#E25822")
    ) +
    "\n" +
    all_cube +
    " 🌊 > " +
    forest(
    "■ " + chalk.underline("FOREST") + " > " + chalk.underline("#14B37D")
    ) +
    "\n" +
    all_cube +
    " 🌊 > " +
    sunny(
    "■ " + chalk.underline("SUNNY") + " > " + chalk.underline("#F2F27A")
    ) +
    "\n" +
    all_cube +
    " 🌊 > " +
    cerulean(
    "■ " + chalk.underline("CERULEAN") + " > " + chalk.underline("#3A75C4")
    ) +
    "\n" +
    all_cube +
    " 🌊 > " +
    mahogany(
    "■ " + chalk.underline("MAHOGANY") + " > " + chalk.underline("#703FAF")
    ) +
    "\n" +
    all_cube +
    " 🌊 > " +
    sky(
    "■ " + chalk.underline("SKY") + " > " + chalk.underline("#87D3F8\n\n")
    )
);