import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CreateMaterial extends ResthopperComponent {

	public guid: string = "76975309-75a6-446a-afed-f8653720a9f2";
	public name: string = "Create Material";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Create an OpenGL material.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}