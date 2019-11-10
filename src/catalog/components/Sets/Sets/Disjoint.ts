import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Disjoint extends ResthopperComponent {

	public guid: string = "81800098-1060-4e2b-80d4-17f835cc825f";
	public name: string = "Disjoint";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Test whether two sets are disjoint.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}