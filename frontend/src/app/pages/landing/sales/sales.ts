import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sales',
  imports: [RouterLink],
  templateUrl: './sales.html',
  styleUrl: './sales.css',
})
export class Sales {
  mainImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDfDrxhtewRa8o2UERRQd5CLNhoq8O9FqMdsrmcoijTuXY_OaPna8SpzuRhyJ3FvKT6EM6pYLvACTkBH0grTZZFHPz80HP4FmDrPlzOTXjkqj4HXMFkm3iVhZccrpp579DBp15tZqv3Dim5ohLxUzbTkstvPnm5wFuiCaIAlE60964ihaq6dpxeqgwWQlX_kiHN50v_-oZbEUNn-I8BZbsp0rM3_wR8otUMSJfv9hL9USNybvKM69tknf9WxeUJWXIJ12AvG8R9LeRN';

  image1 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAcZXeK_Byjl-atTNBhC7gEu15RBFuipkODqwe24FoBzffiFKzrxWzlTjhaPHpIZ20iK0Kx-UzEc92_K2tlRPrYkDFgs1xU4LMmaAlOvQx5sdk4ih_owbFeMYIhOASLaDvjidF3lvvYfhIVb1yQyTacY5dbedYyfZ46q86vbbpF4AiaKYH23QhEF3-Krv_ekD3aGagkjIGh0Jc-BhS1XiVkoX4G-qFLmDOKdXk_dm9HO7m1DQ0rm2o_Hz5mLQVqcFZQrHBI8SYxkqR_';
  image2 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCcRZ24xv7Yg_UVWoTFprKqv2T33uZzEFD6fuj73w_nMAUxskF5FcJVTOrhUANaBUZmUXXSlkzm2C43mu0w756bLJWz6V3daplPNeF3pfhgoEEzM5Mgor1asBHR34xyjtTSUuSAOwKLrNA8QFKv4v4SAcLAD92KouR6aqMU1r02nXgTF7smrRHayhqOo2Dz0jFhmqqmVO-_HupwmNxwLovWMHSylvOwOBVAKMobsrRxLB1sXmELysaXAY9pWdxNU6uonFE6xUaGFHtr';
  image3 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBamxkhqsqm2NEEIpHCq65KCcDLEDBZ5Nb_HwghOA4WgrmbNfO__SxadJQ0IcVGsJfFPJk5SdSNzgx-uzlM19gd_KCzCKIqJzVGr3ZeLG2NAsQcUXq7y3OHzoUtCY282-5HX33NSHUBSKQDKUbDVsZVyDD9z9U9eUcmRws-lI65Xxupv2s19eVmJ40kRqWos3OQCjAiKRwM2ckXN54V5Ms0pzqXCwdM5pjigDPQ3s3mGlUAXL-oeBDYdAnjpfFJnIdQpBN05WjFTFUP';
  image4 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBWnbbfzZUk9hijHahLgFpDFMfoNF5zO9xt8sWkIwRzcmuDc0HrFpxDvuVmhxrEytz8JXORZVNeZ-O7Rq3MLxTJ4vHz6vkjTr071msaLODPzB71bh7Dzk0kXsBnehA37f-qOAgCg4RGP-u4vm7aPFqIBoHG9DGbbRrQOtVi72illDqW9YAY0PQizKDdpjUxOLD7NG8dWHN54dhLJpSTYT2uRtfZaVkYtTmjf6mV-K5r3s9ErRf3FEacewp00zeF2HBYxy9-f1XsgkHA';

  updateMainImage(src: string) {
    this.mainImage = src;
  }

  // function updateMainImage(src) {
  //     const mainImg = document.getElementById('main-vehicle-image');
  //     mainImg.style.opacity = '0';
  //     setTimeout(() => {
  //         mainImg.src = src;
  //         mainImg.style.opacity = '1';
  //     }, 200);

  //     // Update active state on thumbnails
  //     const thumbnails = document.querySelectorAll('.grid.grid-cols-4 button, .grid.grid-cols-5 button');
  //     thumbnails.forEach(btn => {
  //         btn.classList.remove('border-primary', 'ring-2', 'ring-primary/20');
  //         btn.classList.add('border-outline-variant');
  //     });
  //     event.currentTarget.classList.add('border-primary', 'ring-2', 'ring-primary/20');
  //     event.currentTarget.classList.remove('border-outline-variant');
  // }

  // // Simple scroll reveal for cards
  // const observerOptions = {
  //     threshold: 0.1
  // };

  // const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //             entry.target.classList.add('opacity-100', 'translate-y-0');
  //             entry.target.classList.remove('opacity-0', 'translate-y-10');
  //         }
  //     });
  // }, observerOptions);

  // document.querySelectorAll('.group.cursor-pointer').forEach(el => {
  //     el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
  //     observer.observe(el);
  // });
}
