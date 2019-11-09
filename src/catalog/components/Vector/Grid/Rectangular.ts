import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Rectangular extends ResthopperComponent {

	public guid: string = "1a25aae0-0b56-497a-85b2-cc5bf7e4b96b";
	public name: string = "Rectangular";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with rectangular cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}