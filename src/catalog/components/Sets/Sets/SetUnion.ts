import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SetUnion extends ResthopperComponent {

	public guid: string = "8eed5d78-7810-4ba1-968e-8a1f1db98e39";
	public name: string = "Set Union";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the union of two sets (the collection of unique objects present in either set).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}