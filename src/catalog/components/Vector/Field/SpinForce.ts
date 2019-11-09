import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SpinForce extends ResthopperComponent {

	public guid: string = "4b59e893-d4ee-4e31-ae24-a489611d1088";
	public name: string = "Spin Force";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a spin force";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}