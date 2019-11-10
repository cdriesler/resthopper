import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Characters extends ResthopperComponent {

	public guid: string = "86503240-d884-43f9-9323-efe30488a6e1";
	public name: string = "Characters";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Break text into individual characters";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}