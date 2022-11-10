import { ApiResponse } from '../models/Response';
import { Get, Route } from 'tsoa';
import { get } from 'http';

@Route('api/Home')
export class HomeController {
    /**
     *  This is a test method
     * @returns The response.
     *
     * @returns {Promise<ApiResponse<any>>}
     * @memberof HomeController
     */
    @Get('/')
    public async Index(): Promise<ApiResponse<any>> {
        return {
            message: 'Hello World',
        }
    }

    /**
     * This is a test method
     * @returns The List of words.
     *
     * @returns {Promise<ApiResponse<Array<string>>>}
     * @memberof HomeController
     */
    @Get('/list')
    public async listWord(): Promise<ApiResponse<Array<string>>> {
        return {
            dataSet: ['Hello', 'World']
        }
    }

}