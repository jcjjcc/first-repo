def Merge(dict1, dict2):
    
    res = {**dict1, **dict2}
    return res



dict1 = {'name': 'John', 'age': 36}
dict2 = {'city': 'New York', 'country': 'USA'}
dict3 = Merge(dict1, dict2)
print(dict3)