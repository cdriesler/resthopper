import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CreateComplex extends ResthopperComponent {

	public guid: string = "63d12974-2915-4ccf-ac26-5d566c3bac92";
	public name: string = "Create Complex";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Create a complex number from a Real and an Imaginary component";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}