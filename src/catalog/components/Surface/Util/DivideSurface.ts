import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DivideSurface extends ResthopperComponent {

	public guid: string = "5106bafc-d5d4-4983-83e7-7be3ed07f502";
	public name: string = "Divide Surface";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Generate a grid of {uv} points on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}