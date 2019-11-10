import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Hexagonal extends ResthopperComponent {

	public guid: string = "125dc122-8544-4617-945e-bb9a0c101c50";
	public name: string = "Hexagonal";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with hexagonal cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}