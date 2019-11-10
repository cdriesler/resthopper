import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointGroups extends ResthopperComponent {

	public guid: string = "81f6afc9-22d9-49f0-8579-1fd7e0df6fa6";
	public name: string = "Point Groups";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create groups from nearby points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}