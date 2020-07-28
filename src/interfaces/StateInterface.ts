import {CountryInterface} from "./CountryInterface";
import {ResultsInterface} from "./ResultsInterface";

export interface StateInterface {
    country: string,
    results: ResultsInterface[]
    // isLoading: boolean,
    // isError: boolean,
    countries: CountryInterface[]
}
