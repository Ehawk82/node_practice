const volts_per_cell = .5;
const amps_per_cell = .02;
const watts_per_cell = volts_per_cell * amps_per_cell;
const volts_per_series = 13;
const volts_per_series_count = volts_per_series / .5;
const amp_sum_parallel = .12;
const amp_sum_parallel_count = amp_sum_parallel / .02;
const total_watts = volts_per_series * amp_sum_parallel;
const statement = "In order to get "+total_watts+" wattage, you need a solar array that consists of "+amp_sum_parallel_count+" rows, each with "+volts_per_series_count+" cells. Adding all rows should output "+amp_sum_parallel+" amps at "+volts_per_series+" volts each. Individual cells are "+volts_per_cell+" volts with "+amps_per_cell+ " each. Happy soldering!";

console.log(statement);