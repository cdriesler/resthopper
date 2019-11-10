import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextJoin extends ResthopperComponent {

	public guid: string = "1274d51a-81e6-4ccf-ad1f-0edf4c769cac";
	public name: string = "Text Join";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Join a collection of text fragments into one";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}