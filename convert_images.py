import argparse
import os
from PIL import Image

def convert_to_webp(directory):
    supported_formats = ('.jpg', '.jpeg', '.png', '.gif')
    
    for filename in os.listdir(directory):
        if filename.lower().endswith(supported_formats):
            file_path = os.path.join(directory, filename)
            img = Image.open(file_path)
            webp_filename = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(directory, webp_filename)
            img.save(webp_path, 'webp')
            print(f"Converted {filename} to {webp_filename}")

def main():
    parser = argparse.ArgumentParser(description='Convert images to webp format.')
    parser.add_argument('directory', type=str, help='Directory containing images to convert')
    args = parser.parse_args()
    
    if not os.path.isdir(args.directory):
        print(f"The directory {args.directory} does not exist.")
        return
    
    convert_to_webp(args.directory)

if __name__ == "__main__":
    main()