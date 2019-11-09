import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ComplexComponents extends ResthopperComponent {

	public guid: string = "1f384257-b26b-4160-a6d3-1dcd89b64acd";
	public name: string = "Complex Components";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Extract the Real and Imaginary components from a complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}