from django.shortcuts import render
from django.http import JsonResponse
import requests
import random


# Pick a random result from the recipe list and display
# Create your views here.



def get_random_meal_plan():
    # return 3 different meals with 3 different protein sources
    all_protein_sources = ['tofu', 'tempeh', 'chickpea', 'beyond meat', 'almond', 'lentils', 'black beans', 'kidney beans', 'pinto beans']
    # app_id = "b89402b9"
    # app_key = "d362aaeb0dbf19ebfd545203409ddbd1"
    # payload = {"type":"public", "q":"tempeh", "app_id":app_id, "app_key":app_key}
    # api_url = "https://api.edamam.com/api/recipes/v2"
    # response = requests.get(api_url, params=payload)
    protein_sources = random.sample(all_protein_sources, 3)
    recipes = [get_recipe(query_recipe(p)) for p in protein_sources]
    return recipes

def query_recipe(search_string):
    app_id = "b89402b9"
    app_key = "d362aaeb0dbf19ebfd545203409ddbd1"
    payload = {"type":"public", 'mealType':'lunch','mealType':'dinner', "app_id":app_id, "app_key":app_key}
    payload['q'] = search_string
    api_url = "https://api.edamam.com/api/recipes/v2"
    response = requests.get(api_url, params=payload)
    return response.json()
def get_recipe(json_response):
    recipe = {}
    recipe['name'] =  json_response['hits'][0]['recipe']['label']
    recipe['link'] =  json_response['hits'][0]['recipe']['url']
    recipe['image'] =  json_response['hits'][0]['recipe']['image']
    return recipe

    