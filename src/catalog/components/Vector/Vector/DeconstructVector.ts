import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructVector extends ResthopperComponent {

	public guid: string = "a50fcd4a-cf42-4c3f-8616-022761e6cc93";
	public name: string = "Deconstruct Vector";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Deconstruct a vector into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}