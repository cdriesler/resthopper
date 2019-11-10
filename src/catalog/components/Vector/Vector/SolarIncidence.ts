import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolarIncidence extends ResthopperComponent {

	public guid: string = "59e1f848-38d4-4cbf-ad7f-40ffc52acdf5";
	public name: string = "Solar Incidence";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Gets the solar incidence vector for a certain time and place";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}