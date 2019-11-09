import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LineLine extends ResthopperComponent {

	public guid: string = "d788ad7f-6d68-4106-8b2f-9e55e6e107c0";
	public name: string = "Line + Line";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane from two line segments.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}