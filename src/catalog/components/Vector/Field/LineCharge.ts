import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineCharge extends ResthopperComponent {

	public guid: string = "8cc9eb88-26a7-4baa-a896-13e5fc12416a";
	public name: string = "Line Charge";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a line charge";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}