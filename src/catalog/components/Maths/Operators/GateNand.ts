import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateNand extends ResthopperComponent {

	public guid: string = "5ca5de6b-bc71-46c4-a8f7-7f30d7040acb";
	public name: string = "Gate Nand";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean alternative denial (NAND gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}