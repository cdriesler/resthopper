import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitY extends ResthopperComponent {

	public guid: string = "d3d195ea-2d59-4ffa-90b1-8b7ff3369f69";
	public name: string = "Unit Y";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {y} axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}