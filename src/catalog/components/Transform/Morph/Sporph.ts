import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sporph extends ResthopperComponent {

	public guid: string = "9cacad37-b09f-4b54-b2b1-1ccdc2e3ffea";
	public name: string = "Sporph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms an object from a source surface to a target surface";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}