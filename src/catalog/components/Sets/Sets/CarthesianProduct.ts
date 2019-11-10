import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CarthesianProduct extends ResthopperComponent {

	public guid: string = "deffaf1e-270a-4c15-a693-9216b68afd4a";
	public name: string = "Carthesian Product";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the Carthesian product for two sets of identical cardinality.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}