import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateThreeD extends ResthopperComponent {

	public guid: string = "e202025b-dc8e-4c51-ae19-4415b172886f";
	public name: string = "Populate 3D";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate a 3-Dimensional region with points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}