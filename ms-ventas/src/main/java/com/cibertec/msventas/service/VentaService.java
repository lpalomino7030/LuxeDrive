package com.cibertec.msventas.service;

import com.cibertec.msventas.client.AutosFeignClient;
import com.cibertec.msventas.client.ClienteFeignClient;
import com.cibertec.msventas.dto.AutoResponse;
import com.cibertec.msventas.dto.ClienteResponse;
import com.cibertec.msventas.dto.VentaRequest;
import com.cibertec.msventas.dto.VentaResponse;
import com.cibertec.msventas.entity.Venta;
import com.cibertec.msventas.repository.VentaRepository;
import org.springframework.stereotype.Service;

@Service
public class VentaService {

    private final VentaRepository ventaRepository;
    private final ClienteFeignClient clienteFeignClient;
    private final AutosFeignClient autosFeignClient;

    public VentaService(VentaRepository ventaRepository, ClienteFeignClient clienteFeignClient, AutosFeignClient autosFeignClient) {
        this.ventaRepository = ventaRepository;
        this.clienteFeignClient = clienteFeignClient;
        this.autosFeignClient = autosFeignClient;
    }

    public VentaResponse registrarVenta(VentaRequest request){
        Venta nuevaVenta = new Venta();
        nuevaVenta.setIdClientes(request.idClientes());
        nuevaVenta.setIdAutos(request.idAutos());
        nuevaVenta.setFechaVenta(request.fechaVenta());
        nuevaVenta.setPrecioVenta(request.precioVenta());
        nuevaVenta.setDescripcion(request.descripcion());

    Venta ventaGuardada = ventaRepository.save(nuevaVenta);

        ClienteResponse cliente = clienteFeignClient.obtenerCliente(ventaGuardada.getIdClientes());
        AutoResponse auto = autosFeignClient.obtenerAuto(ventaGuardada.getIdAutos());

        return new VentaResponse(
                ventaGuardada.getIdVentas(),
                cliente,
                auto,
                ventaGuardada.getFechaVenta(),
                ventaGuardada.getPrecioVenta(),
                ventaGuardada.getDescripcion()
        );


    }




}
