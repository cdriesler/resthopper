import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextDistance extends ResthopperComponent {

	public guid: string = "f7608c4d-836c-4adf-9d1f-3b04e6a2647d";
	public name: string = "Text Distance";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Compute the Levenshtein distance between two fragments of text.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}