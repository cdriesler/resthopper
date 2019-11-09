import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Extrude extends ResthopperComponent {

	public guid: string = "962034e9-cc27-4394-afc4-5c16e3447cf9";
	public name: string = "Extrude";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a vector.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}