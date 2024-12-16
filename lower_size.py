from PIL import Image
import os

def resize_image(input_path, output_path, max_size=(800, 800), quality=85):
    """
    Resize the image to fit within max_size while maintaining aspect ratio,
    and save it with the specified quality.

    :param input_path: Path to the input image file
    :param output_path: Path to save the resized image
    :param max_size: Maximum width and height of the resized image
    :param quality: Quality of the saved image (1-100)
    """
    with Image.open(input_path) as img:
        img.thumbnail(max_size, Image.LANCZOS)
        img.save(output_path, quality=quality, optimize=True)

if __name__ == "__main__":
    input_path = "./assets/img/about.webp"
    output_path = "./assets/img/about2.webp"
    resize_image(input_path, output_path)