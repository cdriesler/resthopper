import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructDomain extends ResthopperComponent {

	public guid: string = "f0adfc96-b175-46a6-80c7-2b0ee17395c4";
	public name: string = "Deconstruct Domain²";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Deconstruct a two-dimensional domain into its component parts";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}