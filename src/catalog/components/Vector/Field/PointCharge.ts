import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointCharge extends ResthopperComponent {

	public guid: string = "cffdbaf3-8d33-4b38-9cad-c264af9fc3f4";
	public name: string = "Point Charge";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a point charge";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}