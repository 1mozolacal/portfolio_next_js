import json

input_file = 'minifiedData/miniSkills.json'
resultant = {}


def check_override_bar_colour(default, wheel_section):
    if wheel_section == 'cloud':
        return {
            "r": 255,
            "g": 255,
            "b": 255,
        }
    return default


with open(input_file) as read_file:
    data = json.load(read_file)
    starting_colour = data['baseColour']
    for wheel_section, value in data.items():
        if wheel_section in ['baseColour']:
            continue
        skills = value['skills']
        wheel = value['wheel']

        full_skill = {}
        for skill, level in skills.items():
            full_skill[skill] = {
                "skillLevel": level,
                "start": starting_colour,
                "end": check_override_bar_colour(wheel['colour'], wheel_section)
            }

        resultant[wheel_section] = {
            'skills': full_skill,
            'wheel': wheel
        }


with open("output/skill.json", "w") as outfile:
    json.dump(resultant, outfile)
