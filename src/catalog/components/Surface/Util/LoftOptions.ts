import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LoftOptions extends ResthopperComponent {

	public guid: string = "a8da9901-f5fb-49ec-9cd1-dfa7b788263e";
	public name: string = "Loft Options";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Contains a collection of lofting options";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}