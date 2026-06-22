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
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

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

    public VentaResponse ObtenerVentaId (Long Id){
        Venta venta = ventaRepository.findById(Id).orElseThrow(
                () -> new RuntimeException(
                        "Venta no encontrada"
                )
        );

        ClienteResponse cliente = clienteFeignClient.obtenerCliente(venta.getIdClientes());

        AutoResponse auto = autosFeignClient.obtenerAuto(venta.getIdAutos());

        return new VentaResponse(
                venta.getIdVentas(),
                cliente,
                auto,
                venta.getFechaVenta(),
                venta.getPrecioVenta(),
                venta.getDescripcion()
        );
    }

    public List<VentaResponse> listarVentas(){
        List<Venta> ventas =  ventaRepository.findAll();

        return ventas.stream()
                .map(
                venta -> {
                    ClienteResponse cliente =
                            clienteFeignClient.obtenerCliente(
                                    venta.getIdClientes()
                            );
                    AutoResponse auto = autosFeignClient.obtenerAuto(venta.getIdAutos());

                return new VentaResponse(
                        venta.getIdVentas(),
                        cliente,
                        auto,
                        venta.getFechaVenta(),
                        venta.getPrecioVenta(),
                        venta.getDescripcion()

                );
                }).toList();
    }

    public VentaResponse  EditarVenta(@RequestParam Long Id, VentaRequest request){
        Venta venta = ventaRepository.findById(Id)
                .orElseThrow( () -> new RuntimeException("Venta no encontrada0"));

        venta.setIdClientes(request.idClientes());
        venta.setIdAutos(request.idAutos());
        venta.setFechaVenta(request.fechaVenta());
        venta.setPrecioVenta(request.precioVenta());
        venta.setDescripcion(request.descripcion());

        Venta ventaActualizada = ventaRepository.save(venta);
        ClienteResponse cliente = clienteFeignClient.obtenerCliente(ventaActualizada.getIdClientes());
        AutoResponse auto = autosFeignClient.obtenerAuto(ventaActualizada.getIdAutos());

        return new VentaResponse(
                ventaActualizada.getIdVentas(),
                cliente,
                auto,
                ventaActualizada.getFechaVenta(),
                ventaActualizada.getPrecioVenta(),
                ventaActualizada.getDescripcion()
        );
    }
}
