# -*- coding: utf8 -*-
import json

def reading_target_file():
    """_summary_ 读取json文件

    Returns:
        _type_: _description_
    """
    jsonFile = "/Users/bytedance/demo1.json"
    # 读取文件 放到当前工作目录下
    with open(jsonFile, "r", encoding="utf-8") as f:
        fileContent = json.load(f)
        # print(fileContent)
        return fileContent
    
def get_content(msg, errors='replace'):
    """_summary_ 打印入院记录、出院记录、手术记录

    Args:
        msg (_type_): _description_
        errors (str, optional): _description_. Defaults to 'replace'.
    """
    for data in reading_target_file()['Data']:
        for i, resp in enumerate(data['respData']):
            if resp['content_text'] == '入院记录':
                print('-----------------入院记录-----------------')
                print(data['respData'][i])
                pass
            if resp['content_text'] == '出院记录':
                print('-----------------出院记录-----------------')
                print(data['respData'][i])
                pass
            if resp['content_text'] == '手术记录':
                print('-----------------手术记录-----------------')
                print(data['respData'][i])
                pass

if  __name__ == "__main__":
    get_content(0)