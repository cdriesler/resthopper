import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructPath extends ResthopperComponent {

	public guid: string = "df6d9197-9a6e-41a2-9c9d-d2221accb49e";
	public name: string = "Deconstruct Path";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Deconstruct a data tree path into individual integers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}