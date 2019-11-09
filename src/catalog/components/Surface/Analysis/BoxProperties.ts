import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoxProperties extends ResthopperComponent {

	public guid: string = "af9cdb9d-9617-4827-bb3c-9efd88c76a70";
	public name: string = "Box Properties";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get some properties of a box";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}