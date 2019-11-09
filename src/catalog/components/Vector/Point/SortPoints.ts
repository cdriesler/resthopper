import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SortPoints extends ResthopperComponent {

	public guid: string = "4e86ba36-05e2-4cc0-a0f5-3ad57c91f04e";
	public name: string = "Sort Points";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Sort points by Euclidean coordinates (first x, then y, then z)";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}