import restApi from './restApi';
import axios from '../../__mocks__/axios';
import { AxiosResponse } from 'axios';

describe('restApi', () => {
  it('Return data from axios', async () => {
    const mockData: Partial<AxiosResponse> = {
      data: {
        items: [
          {
            name: 'someName',
            lastName: 'somelastName',
          },
        ],
      },
    };
    axios.request.mockImplementationOnce(() => Promise.resolve(mockData));
    const response = await restApi.request({
      method: 'get',
      url: '', // This shouldn't have any effect on the test
    });
    expect(axios.request.mock.calls.length).toEqual(1);
    expect(axios.create.mock.calls.length).toEqual(1);
    return expect(response).toStrictEqual(mockData);
  });
  it('Transform data by restapi.transformResponse as expected', () => {
    const restResponse = [
      { data: { name: 'someName', lastName: 'someLastname' } },
    ];
    const dataString = JSON.stringify(restResponse);
    const transformedResponse = restApi.transformResponse(dataString);
    expect(transformedResponse).toStrictEqual(restResponse);
  });
  it('Handle timeout', async () => {});
});

export {};
