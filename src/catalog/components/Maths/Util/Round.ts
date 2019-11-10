import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Round extends ResthopperComponent {

	public guid: string = "a50c4a3b-0177-4c91-8556-db95de6c56c8";
	public name: string = "Round";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Round a floating point value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}