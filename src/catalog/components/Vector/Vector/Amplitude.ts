import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Amplitude extends ResthopperComponent {

	public guid: string = "6ec39468-dae7-4ffa-a766-f2ab22a2c62e";
	public name: string = "Amplitude";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Set the amplitude (length) of a vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}