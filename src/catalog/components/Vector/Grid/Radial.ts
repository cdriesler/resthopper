import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Radial extends ResthopperComponent {

	public guid: string = "66eedc35-187d-4dab-b49b-408491b1255f";
	public name: string = "Radial";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D radial grid";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}