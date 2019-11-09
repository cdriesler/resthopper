import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Concatenate extends ResthopperComponent {

	public guid: string = "2013e425-8713-42e2-a661-b57e78840337";
	public name: string = "Concatenate";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Concatenate some fragments of text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}